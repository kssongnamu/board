<template>
    <div class="container-sm">
        <div class="d-flex justify-content-between px-5 pb-3 border-bottom">
            <div class="fw-bord"> 
                <a href="/"><h1>Vue.board</h1></a>
            </div>
        </div>
        <div class="m-5">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">이름</span>
                <input type="text" class="form-control" placeholder="이름을 입력해주세요." aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">아이디</span>
                <input type="text" class="form-control" placeholder="아이디를 입력해주세요." aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">비밀번호</span>
                <input type="text" class="form-control" placeholder="비밀번호를 입력해주세요." aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group">
                <span class="input-group-text">비밀번호 확인</span>
                <input type="text" class="form-control" placeholder="비밀번호를 다시 입력해주세요." aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>
        <router-link :to="{ name: 'sign-in', query: { path: $route.query.path }}">
            <button type="button" class="btn btn-outline-dark">회원가입</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>