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
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'sign-in', query: { redirect: '/' }}">로그인</router-link>
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
                        <tr v-for="post, index in posts" :key="post.pid" @click="$router.push('/view')">
                            <th scope="row"> {{ (index + 1) + (pageNum - 1) * 10 }} </th>                            
                            <td>
                                {{ post.title }} 
                            </td>
                            <td> {{ post.user_name }} </td>
                            <td> {{ post.created_at.slice(0, 10) }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
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
import { RouterLink } from 'vue-router';
import $ from 'jquery';

export default {
    name: "board-cp",
    components: { RouterLink },
    data() {
        return {
            posts: [],
            pageNum: 1,
            pageCount: 0
        }
    },
    mounted() {
        this.loadPostList();
    },
    methods: {
        async loadPostList() {
            this.pageNum = (this.$route.query.page === undefined) ? 1 : Number(this.$route.query.page);
            let rows = await this.getPosts();
            this.posts = rows.posts
            let count = await this.getCount();
            this.pageCount = count.result.count
            console.log(this.pageCount)
        },

        async getPosts() {
            let rows = await $.ajax({
                url: 'http://localhost:3000/posts',
                methods: 'GET',
                data: {
                    page_no: this.pageNum
                },
                dataType: 'json'
            })

            return rows;
        },

        async getCount() {
            let result = await $.ajax({
                url: 'http://localhost:3000/posts/count',
                methods: 'GET',
                dataType: 'json'
            })

            return result
        }
    }
}
</script>

<style>
    .navbar .nav-item .nav-link.active{
        font-weight: bold;
        color: var(--bs-gray-800);
    }
    .pagination .page-item .page-link{
        color: var(--bs-dark-text);
    }
    .pagination .page-item.active>.page-link{
        background-color: var(--bs-dark-text);
        color: var(--bs-white);
        border-color: var(--bs-dark-text)
    }
</style>
