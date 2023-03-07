<template>
    <div class="row">
        <div class="col-md-8 col-10 mx-auto mt-5"> 
            <div class="row">    
                <router-link class="btn border-0 p-0 fw-bold fs-1 mb-5 text-start" to="/">Vue.Board</router-link>
            </div>
            <div class="border-bottom">
                <div class="row">
                    <div class="col fs-3 pb-2">{{ post.title }}</div>
                </div>
                <div class="row">
                    <div class="col fs-6 pb-2">{{ post.user_name }} | {{ post.created_at }}</div>
                    <div class="col fs-6 pb-2 fw-light text-end"></div>
                </div>
            </div>
            <div class="mt-3">
                <div class="row">
                    <div class="col fs-4">{{ post.content }}</div>
                </div>
            </div>
            <div class="mt-5">
                <div class="row">
                    <div class="col">
                        <textarea class="border w-100 h-100" rows="2" v-model="inputComment"></textarea>
                    </div>
                    <div class="col-3 col-md-2 col-xl-1 btn btn-light border pt-3" @click="onClickAddComment()">등록</div>
                </div>
            </div>
            <div class="mt-2 pb-2 border-bottom" v-for="comment in comments" :key="comment.comment_id">
                <div class="row">
                    <div class="col fs-6 fw-bold mb-2"> {{ comment.user_name }} </div>
                </div>
                <div class="row">
                    <div class="col fs-5 mb-2"> {{ comment.content }} </div>
                </div>
                <div class="row">
                    <div class="col fs-6 fw-light"> {{ comment.created_at }} </div>
                    <div class="col-3 col-md-2 col-xl-1 p-0 btn btn-outline-dark" @click="onClickDeleteComment(comment.comment_id, comment.post_id, comment.user_id)">삭제</div>
                </div>
            </div>
            <div class="row">
                <div class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-auto" @click="onClickDeletePost()">삭제</div>
                <div class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-3" @click="onClickEditPost()">수정</div>
                <router-link to="/" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-3">목록</router-link>
            </div>
        </div>
        <modal-confirm :redirect="$route.fullPath"></modal-confirm>
        <modal-alert></modal-alert>
    </div>
</template>
  
<script>
import modalConfirm from '@/components/modalConfirm.vue';
import modalAlert from '@/components/modalAlert.vue';

    export default {
        name: 'view-cp',
        components: {
            modalConfirm,
            modalAlert
        },
        data() {
            return{
                postId: 0,
                post: {},
                comments: [],
                inputComment: '',
                modalType: ''
            }
        },
        mounted() {
            this.loadPost();  
            this.loadComments();  
        },
        methods: {
            async loadPost() {
                this.postId = this.$route.params.post_id;
                let response = await fetch(`http://localhost:3000/posts/post?post_id=${this.postId}`);
                let result = await response.json();
                if (!result.success) {
                    return alert(result.message);
                }
                this.post = result.post;
            },
            onClickEditPost() {                
                const checkMessage = this.checkOwnUser()
                if(checkMessage){
                    this.modalType = checkMessage;
                    return;
                }                
                this.$router.push({name: 'edit', params: {post_id: this.post.postId}})
            },
            async onClickDeletePost() {
                const postId = this.post.post_id;
                const userId = this.post.user_id;               

                const checkMessage = this.checkOwnUser()
                if(checkMessage){
                    const targetModal = document.getElementById(checkMessage)
                    console.log(checkMessage)
                    targetModal.addEventListener('show.bs.modal')
                    return;
                }
                const existsToken = this.$cookies.get('token');             
                
                let response = await fetch(`http://localhost:3000/posts?post_id=${postId}&user_id=${userId}`, {
                    method: 'DELETE',
                    headers: {'authorization': existsToken}
                })

                let result = await response.json();
                this.$router.push('/')
                return alert(result.message);
            },
            async loadComments() {
                this.comments = [];
                let response = await fetch(`http://localhost:3000/comments?post_id=${this.postId}`)
                let rows = await response.json();
                this.comments = rows.comments;
            },
            async onClickAddComment() {
                const existsToken = this.$cookies.get('token');
                if (this.inputComment === ''){
                    return alert("댓글을 입력해 주세요.");
                }

                await fetch('http://localhost:3000/comments',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'authorization': existsToken
                    },
                    body: JSON.stringify({
                        "content": this.inputComment,
                        "post_id": this.postId,
                        "user_id": this.userProfile.user_id
                    })
                })
                
                this.inputComment = '';
                this.loadComments();  
                return alert("등록 되었습니다.");
            },
            async onClickDeleteComment(commentId, postId, userId) {
                const loginUserId = this.userProfile.user_id
                const existsToken = this.$cookies.get('token');
                if (loginUserId !== userId) {
                    return alert("댓글을 삭제할 권한이 없습니다.");
                }
                
                let response = await fetch(`http://localhost:3000/comments?comment_id=${commentId}&post_id=${postId}&user_id=${userId}`, {
                    method: 'DELETE',
                    headers: {'authorization': existsToken}
                })

                let result = await response.json();
                this.loadComments();
                return alert(result.message);
            },
            checkOwnUser() {
                const userProfile = this.$store.getters['getUserProfile'];
                if (!userProfile){
                    return 'modal-confirm'
                }else if(userProfile.user_id !== this.post.user_id){
                    return 'modal-alert'
                }else{
                    return null
                }
            }
        }
    }
</script>

<style>
</style>
  