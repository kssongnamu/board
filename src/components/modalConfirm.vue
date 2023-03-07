<template>  
    <div class="modal fade" id="modal-confirm">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">알림</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    로그인 후 이용 하실 수 있습니다.
                </div>
                <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">확인</button>
                        <router-link :to="{ name: 'sign-in', query: { redirect:  redirect}}" class="btn btn-dark" data-bs-dismiss="modal">로그인</router-link> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal-confirm',
        props:[
            'redirect'
        ]
    }
</script>