<template>
    <div> 
        <div class="d-flex justify-content-between px-5 pb-3 border-bottom">
            <div class="fw-bord"> 
                <a href="/"><h1>Vue.board</h1></a>
            </div>
            <div>
                <button type="button" class="btn btn-light bg-white">로그인</button>
            </div>
        </div>
        <div>
            <div class="d-flex justify-content-between p-3 mx-5 border-bottom">
                <div>
                    번호
                </div>
                <div>
                    제목
                </div>
                <div> 
                    시간
                </div>
            </div>
            <div class="d-flex justify-content-between p-3 mx-5 border-bottom">
                <div>
                    번호
                </div>
                <div>
                    제목
                </div>
                <div> 
                    시간
                </div>
            </div>
        </div>
        <div>
            <a href="/create"><button type="button" class="btn btn-light bg-white mt-5">등록</button></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'board-cp',
  props: {
    msg: String
  }
}
</script>

<style>
</style>
