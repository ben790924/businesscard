<template>
  <div>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
      <g fill="none" fill-rule="evenodd">
        <circle className="checkmark--circle" cx="100" cy="100" r="84.615" fill="#018428"/>
        <polyline class="checkmark--check" stroke="#FFF"  points="76.923 130.769 123.077 130.769 123.077 38.462" transform="rotate(42 100 84.615)"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
name: 'checkmark',
}
</script>

<style lang="scss" scoped>
@keyframes scale {
  0% {
    transform: scale3d(0.5, 0.5, 1);
    opacity: 0;
  }
  70% {
    transform: scale3d(1.1, 1.1, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
    opacity: 100;
  }
}
.checkmark {
  margin: auto;
  display: flex;
  transform: scale3d(0.5, 0.5, 1);
  animation: opacity 0.5s, scale 1s ease-in-out 0s forwards;
  padding-left: 6px;
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
.checkmark--check {
  stroke: #FFF;
  stroke-width: 25;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: stroke 1s cubic-bezier(0.650, 0.000, 0.450, 1.000) 1s forwards;
}
</style>
