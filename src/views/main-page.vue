<template>
    <div class="row">
        <div class="col-md-8 col-10 mx-auto mt-5"> 
            <nav class="navbar navbar-expand">
                <div class="container-fluid p-0">
                    <router-link class="navbar-brand fw-bold fs-1" to="/">Vue.Board</router-link>
                    <ul class="navbar-nav ms-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active btn border-0" data-bs-toggle="modal" data-bs-target="#Modal">글쓰기</a>
                        </li>
                        <li class="nav-item" v-if="!userProfile">
                            <router-link class="nav-link" :to="{ name: 'sign-in', query: { redirect: '/' }}">로그인</router-link>
                        </li>     
                        <li class="nav-item" v-else>
                            <router-link class="nav-link" :to="{ name: 'sign-in', query: { redirect: '/' }}">로그아웃</router-link>
                        </li>                     
                    </ul> 
                </div>
            </nav>        
            <div class="mt-5">
                <table class="table table-hover">
                    <colgroup>
                        <col width="100px"/>
                        <col width=""/>
                        <col width="150px"/>
                        <col width="150px"/>
                    </colgroup>
                    <thead class="table-light">
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>                            
                            <th>작성 일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            v-for="post, index in posts" :key="post.post_id" 
                            @click="$router.push({ name: 'view', params: {post_id: post.post_id} })"
                        >
                            <th scope="row"> {{ (index + 1) + (curPage - 1) * 10 }} </th>                            
                            <td>
                                {{ post.title }} 
                            </td>
                            <td> {{ post.user_name }} </td>
                            <td> {{ post.created_at.slice(0, 10) }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <page-navigation :curPage="curPage" :postsCount="postsCount" @changePage="changePage"></page-navigation>
        </div>
        <div>
            <!-- Modal -->
            <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="ModalLabel">알림</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        로그인 후에 글을 쓰실 수 있습니다.
                    </div>
                    <div class="modal-footer">
                        <a href="/"><button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">목록으로</button></a>
                        <router-link :to="{ name: 'sign-in', query: { redirect: '/create'}}">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">로그인</button>
                        </router-link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pageNavigation from '@/components/page-navigation.vue';

export default {
    name: "board-cp",
    components: {         
        pageNavigation
    },
    data() {
        return {
            posts: [],
            curPage: 1,
            postsCount: 0,
            loginProfile: {}
        }
    },
    mounted() {
        this.loadRows();
        this.loadCount();
    },
    methods: {
        async loadRows() {
            let rows = await this.getPosts();
            this.posts = rows.posts
        },
        async loadCount() {
            let count = await this.getCount();
            this.postsCount = count.result.count
        },
        changePage(curPage) {
            this.curPage = curPage;
            this.loadRows();
        },
        async getPosts() {
            let response = await fetch(`http://localhost:3000/posts?page_no=${this.curPage}`)
            let rows = await response.json();
            return rows;
        },            
        async getCount() {
            let response = await fetch(`http://localhost:3000/posts/count`)
            let result = await response.json();
            return result;
        },

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
