<template>
    <div class="row">
        <div class="col-md-8 col-10 mx-auto mt-5">
            <div class="row">    
                <router-link class="btn border-0 p-0 fw-bold fs-1 mb-5" to="/">Vue.Board</router-link>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 ms-auto me-auto">
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-4 col-form-label">이름</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="staticEmail">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-4 col-form-label">아이디</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="staticEmail">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-4 col-form-label">비밀번호</label>
                        <div class="col-8">
                            <input type="password" class="form-control" id="staticEmail">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-4 col-form-label">확인</label>
                        <div class="col-8">
                            <input type="password" class="form-control" id="inputPassword">
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-6 ms-auto">
                            <div class="d-grid">
                                <router-link :to="{ name: 'sign-in', query: { redirect: $route.query.redirect }}" class="btn btn-outline-dark">회원가입</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>