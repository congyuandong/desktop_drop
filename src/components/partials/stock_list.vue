<template>
  <el-autocomplete
    v-model="state4"
    :fetch-suggestions="querySuggest"
    placeholder="名称或代码"
    @select="handleSelect"
  ></el-autocomplete>
</template>
<script>
  export default {
    data() {
      return {
        restaurants: [],
        state4: '',
        timeout: null,
        fetchUrl: 'http://suggest3.sinajs.cn/suggest/',
      };
    },
    methods: {
      querySuggest(queryString, back) {
        const funcName = `suggest_${this.randomString(8)}`;
        this.insertScript(`${this.fetchUrl}key=${queryString}&name=${funcName}`, funcName, back);
      },
      handleSelect(item) {
        console.log(item);
      },
      insertScript(argUrl, funcName, back) {
        const scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.src = argUrl;
        scriptEl.onload = scriptEl.onreadystatechange = function () {
          if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
            const suggest = window[funcName];
            this.parentNode.removeChild(this);
            if (suggest !== '') {
              back(suggest.split(';').map((stock) => {
                const data = stock.split(',');
                return {
                  value: `${data[4]}(${data[0]})`,
                  code: data[0],
                };
              }));
            } else {
              back([]);
            }
          }
        };
        const headEl = document.getElementsByTagName('head')[0];
        headEl.appendChild(scriptEl);
      },
      randomString(len) {
        return Math.random().toString(36).slice(2, len);
      },
    },
  };
</script>
