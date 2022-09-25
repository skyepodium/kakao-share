<template>
  <div id="app">
    <div class="kakao-share" @click="kakaoShare">
      카카오 공유하기 JS SDK v2
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    kakaoShare() {
      window.Kakao.Share.sendCustom({
        templateId: 83333,
        // 카카오톡이 설치 되지 않았을때 마켓으로 이동
        installTalk: true
      });
    },
  },
};
</script>

<style scored>
* {
  margin: 0;
  padding: 0;
}

.kakao-share {
  width: 300px;
  height: 50px;
  line-height: 50px;
  color: black;
  text-align: center;
  background: #ffe812;
  font-size: 22px;
  margin-left:auto; 
  margin-right: auto;
  margin-top: 150px;
  cursor: pointer;
}
</style>