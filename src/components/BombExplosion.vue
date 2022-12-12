<template>
  <v-card fill-height fluid>
    <div class="scene6">
      <div id="bomb">
        <svg
          class="tail"
          version="1.1"
          id="&#xB808;&#xC774;&#xC5B4;_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="63.333px"
          height="30.667px"
          viewBox="0 0 63.333 30.667"
          style="enable-background: new 0 0 63.333 30.667"
          xml:space="preserve"
        >
          <path
            d="M3,19.333C3,17.258,9.159,1.416,21,5.667
			c13,4.667,13.167,38.724,39.667,7.39"
          />
        </svg>
        <div class="head"></div>
        <div class="body"></div>
      </div>
    </div>
    <div id="text"></div>
  </v-card>
</template>

<script>
import Scene from "scenejs";

export default {
  name: "BombExplosion",
  components: {},
  mounted() {},
  computed: {},

  data: () => ({}),
  methods: {
    explode: function () {
      const ease = [0.42, 0, 0.58, 1];
      const customTimingFunction = [0.48, 0.01, 0.25, 1];
      const scene1 = new Scene(
        {},
        {
          easing: customTimingFunction,
          selector: true,
          playSpeed: 1,
        }
      );

      const scene6 = new Scene(
        {
          "#bomb": {
            0: { transform: "rotate(20deg) scale(0,0)" },
            0.3: { transform: "scale(1.3, 1.3)" },
            0.5: { transform: "scale(1,1)" },
          },
          "#bomb .tail path": {
            0: { "stroke-dashoffset": 0 },
            2: { "stroke-dashoffset": 100 },
          },
          "#bomb .body": {
            2: { transform: "scale(1,1)" },
            3: { transform: "scale(20,20)" },
          },
        },
        {
          easing: ease,
          selector: true,
        }
      );

      scene1.append(scene6);
      scene1.setTime(0).play();
    },
  },
};
</script>
<style scoped>
html,
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  background: skyblue;
  overflow: hidden;
}
.scene6 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#text {
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  font-size: 100px;
  margin-left: -50px;
  margin-top: -50px;
  position: absolute;
  color: white;
  text-align: center;
  line-height: 100px;

  font-family: sans-serif;
}
.circles {
  z-index: 100;
}
.circle {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  margin-top: -75px;
  margin-left: -75px;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  border: 75px solid transparent;
}

.svg_circle {
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  font-size: 100px;
  margin-left: -150px;
  margin-top: -150px;
  position: absolute;
}
.svg_circle circle {
  stroke-width: 5;
  stroke-linejoin: round;
  stroke-dasharray: 0 1000;
  stroke-dashoffset: 1;

  stroke: #ff8c3a;
}
.svg_circle circle#rotate_circle2 {
  stroke-width: 2;
  stroke: #3aa1bf;
}
.svg_circle circle#rotate_circle3 {
  stroke-width: 1;
  stroke: white;
}
#stick {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 0;
  margin-left: -17px;
  width: 24px;
  border-bottom: 150px solid #e5ebf7;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transform-origin: 50% 0%;
}

.circle_square {
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  background: #ffdddd;
}

#bomb {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
  stroke-dasharray: 100 1000;
  stroke-dashoffset: 0;
  transform: rotate(20deg);
}
#bomb .tail {
  position: absolute;
  left: 50%;
  top: -110px;
  width: 200px;
  height: 200px;
  margin-left: -10px;
}
#bomb .tail path {
  stroke-width: 3px;
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 10;
}
#bomb .head {
  position: absolute;
  width: 80px;
  height: 20px;
  left: 50%;
  margin-left: -40px;
  top: -10px;
  background: #000;
}
#bomb .body {
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  background: #000;
  border-radius: 50%;
}
</style>
