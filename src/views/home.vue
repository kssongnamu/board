<template>
    <div class="row">
        <div class="col-md-8 col-10 mx-auto mt-5"> 
            <nav class="navbar navbar-expand">
                <div class="container-fluid p-0">
                    <router-link class="navbar-brand fw-bold fs-1" to="/">Vue.Board</router-link>
                    <ul class="navbar-nav ms-auto mb-lg-0">
                        <template  v-if="!userProfile">
                            <li class="nav-item">
                                <a class="nav-link active btn border-0" data-bs-toggle="modal" data-bs-target="#modal-confirm">글쓰기</a>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ name: 'sign-in', query: { redirect: '/' }}">로그인</router-link>
                            </li>  
                        </template>   
                        <template v-else>
                            <li class="nav-item">
                                <router-link to="create" class="nav-link active btn border-0">글쓰기</router-link>
                            </li>
                            <li class="nav-item">
                                <div class="nav-link btn border-0" @click="onClickSignOut()">로그아웃</div>
                            </li>          
                        </template>              
                    </ul> 
                </div>
            </nav>        
            <div class="mt-5">
                <table class="table table-hover">
                    <colgroup>
                        <col width="50px"/>
                        <col width=""/>
                        <col width="100px"/>
                        <col width="100px"/>
                    </colgroup>
                    <thead class="table-light">
                        <tr>
                            <th class="text-center">번호</th>
                            <th>제목</th>
                            <th>작성자</th>                            
                            <th class="text-center">작성 일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            v-for="post, index in posts" :key="post.post_id" 
                            @click="$router.push({ name: 'view', params: {post_id: post.post_id} })"
                        >
                            <th class="text-center" scope="row"> {{ (index + 1) + (currPageNo - 1) * 10 }} </th>                            
                            <td>
                                {{ post.title }} 
                            </td>
                            <td> {{ post.user_name }} </td>
                            <td class="text-center"> {{ post.created_at.slice(0, 10) }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <page-navigation :currPageNo="currPageNo" :postsCount="postsCount" @onClickChangePage="onClickChangePage"></page-navigation>
        </div>
        <modal-confirm :redirect="$route.fullPath"></modal-confirm>
        <modal-alert></modal-alert>
    </div>
</template>

<script>
import pageNavigation from '@/components/pageNavigation.vue';
import modalConfirm from '@/components/modalConfirm.vue';
import modalAlert from '@/components/modalAlert.vue';

export default {
    name: "board-cp",
    components: {         
        pageNavigation,
        modalConfirm,
        modalAlert
    },
    data() {
        return {
            posts: [],
            currPageNo: 1,
            postsCount: 0
        }
    },
    mounted() {
        this.loadPosts();
        this.loadCount();
    },
    methods: {
        async loadPosts() {
            let response = await fetch(`http://localhost:3000/posts?page_no=${this.currPageNo}`)
            let rows = await response.json();
            this.posts = rows.posts;
        },            
        async loadCount() {
            let response = await fetch(`http://localhost:3000/posts/count`)
            let result = await response.json();
            this.postsCount = result.result.count;
        },
        onClickSignOut() {
            this.$cookies.remove('token');
            this.$store.commit('setUserProfile', null);
            alert('로그아웃 되었습니다.')
        },
        onClickChangePage(currPageNo) {
            this.currPageNo = currPageNo;
            this.loadPosts();
        }

    },
    computed: {
        userProfile() {
            return this.$store.getters['getUserProfile']
        }
    }
}
</script>

<style>
</style>
