<template>
  <div class="why">
    <navigation />
    <mobile-navigation />
    <div class="page">
      <slot>
        <p>This is the default content for the slot.</p>
      </slot>
    </div>
    <foot />
  </div>
</template>
