<template>
    <nav aria-label="Page navigation">
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
</template>

<script>
    export default {
        name: 'page-navigation',
        props: [
            pageNum
        ]
    }
</script>