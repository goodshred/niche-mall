<template>
    <div class="content-box" :class="{'content-collapse':collapse}">
       <Tags/>
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <el-backtop target=".content"></el-backtop>
        </div>
    </div>
</template>

<script>

import bus from 'common/bus';
import Tags from "./childComps/Tags";
export default {
    name:'Main',
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        Tags
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
