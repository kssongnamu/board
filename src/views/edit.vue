<template>
    <div class="row">
        <div class="col-md-8 col-10 mx-auto mt-5"> 
            <div class="row">    
                <router-link class="btn border-0 p-0 fw-bold fs-1 mb-5 text-start" to="/">Vue.Board</router-link>
            </div>
            <div class="fs-5 fw-bold">
                <div class="row">
                    <label class="form-label p-0">제목</label>
                    <input type="email" class="form-control mb-3" placeholder="제목을 입력해 주세요.">
                </div>
                <div class="row">
                    <label class="form-label p-0">내용</label>
                    <textarea class="form-control" rows="10"></textarea>
                </div>
            </div>
            <div class="row">
                <router-link to="/view" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-auto">등록</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'edit-cp'
    }
</script>

<style>
</style>
  