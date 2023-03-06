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
                    <div class="col-3 col-md-2 col-xl-1 btn btn-light border pt-3" @click="addComment()">등록</div>
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
                    <div class="col-3 col-md-2 col-xl-1 p-0 btn btn-outline-dark">삭제</div>
                </div>
            </div>
            <div class="row">
                <router-link to="/" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-auto">삭제</router-link>
                <router-link to="/edit" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-3">수정</router-link>
                <router-link to="/" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-3">목록</router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: 'view-cp',
        data() {
            return{
                userProfile: {},
                postId: 0,
                post: {},
                comments: [],
                inputComment: ''
            }
        },
        mounted() {
            this.loadView();
            this.getpost();  
            this.getcomments();  
        },
        methods: {
            loadView() {
                this.postId = this.$route.params.post_id;
                this.userProfile = this.$store.getters['getUserProfile'];
            },
            async getpost() {
                let response = await fetch(`http://localhost:3000/posts/post?post_id=${this.postId}`);
                let result = await response.json();
                if (!result.success) {
                    return alert(result.message);
                }
                this.post = result.post;
            },
            async getcomments() {
                let response = await fetch(`http://localhost:3000/comments?post_id=${this.postId}`)
                let rows = await response.json();
                this.comments = rows.comments;
            },
            async addComment() {
                if (this.inputComment === ''){
                    return alert("댓글을 입력해 주세요.");
                }

                await fetch('http://localhost:3000/comments',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        "content": this.inputComment,
                        "post_id": this.postId,
                        "user_id": this.userProfile.user_id
                    })
                })
                this.inputComment = '';
                return alert("등록 되었습니다.");
            },
            async deleteComment(commentId) {
                if (this.userProfile.user_id !== commentId) {
                    return alert("댓글을 삭제할 권한이 없습니다.");
                }
                
                await fetch(`http://localhost:3000/comment`)
            }
        }
    }
</script>

<style>
</style>
  