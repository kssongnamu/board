<template>
    <div class="row">
        <div class="col-md-8 col-10 mx-auto mt-5"> 
            <nav class="navbar navbar-expand">
                <div class="container-fluid p-0">
                    <router-link class="navbar-brand fw-bold fs-1" to="/">Vue.Board</router-link>
                    <ul class="navbar-nav ms-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active btn border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">글쓰기</a>
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
                        <tr v-for="post, index in postList" :key="post.pid" @click="$router.push('/view')">
                            <th scope="row"> {{ index + 1 }} </th>                            
                            <td>
                                {{ post.title }} 
                            </td>
                            <td> {{ post.writer }} </td>
                            <td> {{ post.date }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" :href="'?page='+(pageNum - 1)" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li :class="['page-item', {'active' : i === pageNum}]" v-for="i in 5" :key="i">
                        <a class="page-link" :href="`?page=${i}`"> {{ i }} </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href="'?page='+(pageNum + 1)" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">알림</h1>
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

export default {
    name: "board-cp",
    props: {
        msg: String
    },
    data() {
        return {
            postList: [
                {
                    pid:1,
                    writer: 'Mark',
                    title: 'Otto',
                    date: '2022-05-28'
                },
                {
                    pid:2,
                    writer: 'Mark',
                    title: 'Otto',
                    date: '2022-05-28'
                },
                {
                    pid:3,
                    writer: 'Mark',
                    title: 'Otto',
                    date: '2022-05-28'
                },
                {
                    pid:4,
                    writer: 'Mark',
                    title: 'Otto',
                    date: '2022-05-28'
                },
                {
                    pid:5,
                    writer: 'Mark',
                    title: 'Otto',
                    date: '2022-05-28'
                },
            ],
            pageNum: 1,
        }
    },
    mounted() {
        this.loadPostList();
    },
    methods: {
        loadPostList() {
            this.pageNum = (this.$route.query.page === undefined) ? 1 : Number(this.$route.query.page);
            
        },
    },
    components: { RouterLink }
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
