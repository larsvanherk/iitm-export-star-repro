<template>
  <div>
    <NuxtRouteAnnouncer />

    <pre>Test const from graphql-ws: {{ myConstValue }}</pre>
  </div>
</template>

<script setup lang="ts">
import { GRAPHQL_TRANSPORT_WS_PROTOCOL } from 'graphql-ws';

const myConstValue = GRAPHQL_TRANSPORT_WS_PROTOCOL;
</script>
