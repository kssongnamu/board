<template>
    <div class="container-sm"> 
        <nav class="navbar navbar-expand mt-5">
            <div class="container-fluid p-0">
                <router-link class="navbar-brand fw-bold fs-2" to="/">Vue.Board</router-link>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active btn border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">글쓰기</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'sign-in', query: { redirect: '/' }}">로그인</router-link>
                    </li>                        
                </ul> 
            </div>
        </nav>        
        <div>
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">작성자</th>
                        <th scope="col">제목</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td><router-link to="/view">Otto</router-link></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td><router-link to="/view">Thornton</router-link></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td><router-link to="/view">twitter</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
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
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "board-cp",
    props: {
        msg: String
    },
    methods: {},
    components: { RouterLink }
}
</script>

<style>
    .navbar .nav-item .nav-link.active{
        font-weight: bold;
        color: var(--bs-gray-800);
    }
</style>
