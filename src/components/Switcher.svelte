<style>

.toggle, .toggler {
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}

.toggler {
  color: #ddd;
  transition: .2s;
  font-weight: bold;
}

.toggler--is-active {
  @apply text-primary;
}

.toggle {
  position: relative;
  width: 80px;
  height: 35px;
  border-radius: 100px;
  /* background-color: #9D1726; */
  @apply bg-primary;
  overflow: hidden;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.05);
}

.check {
  position: absolute;
  display: block;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 6;
}

.check:checked ~ .switch {
  right: 2px;
  left: 57.5%;
  transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition-property: left, right;
  /* transition-delay: .008s, 0s; */
}

.switch {
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  right: 57.5%;
  background-color: #fff;
  border-radius: 36px;
  z-index: 1;
  transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition-property: left, right;
  /* transition-delay: 0s, .008s; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

</style>

<script>
  import { isMonthlyState } from '../components/store/index.js'
  let isMonthly
  isMonthlyState.subscribe(value => { isMonthly = value })

</script>

<div>
  <span class="toggler {isMonthly? "toggler--is-active": ""}">Monthly</span>
  <div class="toggle">
    <input type="checkbox" id="switcher" class="check"  on:change={()=>{
      isMonthlyState.update(val=> !val)
    }}>
    <b class="b switch"></b>
  </div>
  <span class="toggler {isMonthly? "": "toggler--is-active"}">Annually</span>
</div>
