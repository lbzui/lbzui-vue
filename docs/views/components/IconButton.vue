<template>
  <article class="lbzui-components-icon-button">
    <h2 class="lbz-typography--h5"># Icon button</h2>

    <lbz-icon-button @click.stop="fclick">favorite_border</lbz-icon-button>
    <lbz-icon-button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
        />
      </svg>
    </lbz-icon-button>
    <lbz-icon-button>
      <img src="../../assets/img/logo.png" />
    </lbz-icon-button>

    <h3 class="lbz-typography--subtitle1">
      $ router-link (!toggle): true, false (default)
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ router-link-props (!toggle && router-link): { to: '' (default) || 'x' ||
      { x: y }, replace: true || false (default), append: true || false
      (default), exact: true || false (default), event: 'click' (default) || 'x'
      || ['x'] }
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ tag: 'button' (default), 'a', 'x'
    </h3>

    <lbz-icon-button
      router-link
      :router-link-props="{
        to: '/components/icon-button',
        replace: true,
        exact: true,
        event: 'dblclick'
      }"
      tag="a"
      >favorite_border</lbz-icon-button
    >
    <lbz-icon-button tag="a" href="#/components/icon-button"
      >favorite_border</lbz-icon-button
    >

    <h3 class="lbz-typography--subtitle1">
      $ on-background: 'primary', 'secondary', 'surface' (default), 'error',
      'light', 'dark'
    </h3>

    <div class="lbzui-mini-square lbzui-color-background--primary">
      <lbz-icon-button on-background="primary">favorite_border</lbz-icon-button>
    </div>
    <div class="lbzui-mini-square lbzui-color-background--secondary">
      <lbz-icon-button on-background="secondary"
        >favorite_border</lbz-icon-button
      >
    </div>
    <div class="lbzui-mini-square lbzui-color-background--surface">
      <lbz-icon-button>favorite_border</lbz-icon-button>
    </div>
    <div class="lbzui-mini-square lbzui-color-background--error">
      <lbz-icon-button on-background="error">favorite_border</lbz-icon-button>
    </div>
    <div class="lbzui-mini-square lbzui-color-background--light">
      <lbz-icon-button on-background="light">favorite_border</lbz-icon-button>
    </div>
    <div class="lbzui-mini-square lbzui-color-background--dark">
      <lbz-icon-button on-background="dark">favorite_border</lbz-icon-button>
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div
      class="lbzui-mini-square lbzui-color-background--primary lbzui-is-darkened"
    >
      <lbz-icon-button on-background="primary" darkened
        >favorite_border</lbz-icon-button
      >
    </div>
    <div
      class="lbzui-mini-square lbzui-color-background--secondary lbzui-is-darkened"
    >
      <lbz-icon-button on-background="secondary" darkened
        >favorite_border</lbz-icon-button
      >
    </div>
    <div
      class="lbzui-mini-square lbzui-color-background--error lbzui-is-darkened"
    >
      <lbz-icon-button on-background="error" darkened
        >favorite_border</lbz-icon-button
      >
    </div>
    <div
      class="lbzui-mini-square lbzui-color-background--light lbzui-is-darkened"
    >
      <lbz-icon-button on-background="light" darkened
        >favorite_border</lbz-icon-button
      >
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-mini-square lbzui-color-background--primary">
      <lbz-icon-button on-background="primary" disabled
        >favorite_border</lbz-icon-button
      >
    </div>
    <div class="lbzui-mini-square lbzui-color-background--secondary">
      <lbz-icon-button on-background="secondary" disabled
        >favorite_border</lbz-icon-button
      >
    </div>
    <div class="lbzui-mini-square lbzui-color-background--surface">
      <lbz-icon-button disabled>favorite_border</lbz-icon-button>
    </div>
    <div class="lbzui-mini-square lbzui-color-background--error">
      <lbz-icon-button on-background="error" disabled
        >favorite_border</lbz-icon-button
      >
    </div>
    <div class="lbzui-mini-square lbzui-color-background--light">
      <lbz-icon-button on-background="light" disabled
        >favorite_border</lbz-icon-button
      >
    </div>
    <div class="lbzui-mini-square lbzui-color-background--dark">
      <lbz-icon-button on-background="dark" disabled
        >favorite_border</lbz-icon-button
      >
    </div>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <lbz-icon-button ripple>favorite_border</lbz-icon-button>
    <lbz-icon-button :ripple="false">favorite_border</lbz-icon-button>

    <h2 class="lbz-typography--h5"># Icon toggle button</h2>

    <h3 class="lbz-typography--subtitle1">
      $ active.sync (toggle): undefined (default), true, false
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ on-icon (toggle): '' (default), 'x'
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ off-icon (toggle): '' (default), 'x'
    </h3>

    <lbz-icon-button
      :active.sync="vactive"
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button :active.sync="vactive">
      <template #on-icon>favorite</template>
      <template #off-icon>favorite_border</template>
    </lbz-icon-button>
    <lbz-icon-button :active.sync="vactive">
      <template #on-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"
          />
        </svg>
      </template>
      <template #off-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          />
        </svg>
      </template>
    </lbz-icon-button>
    <lbz-icon-button :active.sync="vactive">
      <template #on-icon>
        <img src="../../assets/img/logo.png" />
      </template>
      <template #off-icon>
        <img src="../../assets/img/logo.png" />
      </template>
    </lbz-icon-button>

    <h3 class="lbz-typography--subtitle1">
      $ tag: 'button' (default), 'a', 'x'
    </h3>

    <lbz-icon-button
      :active.sync="vactive"
      tag="a"
      on-icon="favorite"
      off-icon="favorite_border"
    />

    <h3 class="lbz-typography--subtitle1">
      $ on-background: 'primary', 'secondary', 'surface' (default), 'error',
      'light', 'dark'
    </h3>

    <div class="lbzui-mini-square lbzui-color-background--primary">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="primary"
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--secondary">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="secondary"
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--surface">
      <lbz-icon-button
        :active.sync="vactive"
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--error">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="error"
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--light">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="light"
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--dark">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="dark"
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div
      class="lbzui-mini-square lbzui-color-background--primary lbzui-is-darkened"
    >
      <lbz-icon-button
        :active.sync="vactive"
        on-background="primary"
        darkened
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div
      class="lbzui-mini-square lbzui-color-background--secondary lbzui-is-darkened"
    >
      <lbz-icon-button
        :active.sync="vactive"
        on-background="secondary"
        darkened
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div
      class="lbzui-mini-square lbzui-color-background--error lbzui-is-darkened"
    >
      <lbz-icon-button
        :active.sync="vactive"
        on-background="error"
        darkened
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div
      class="lbzui-mini-square lbzui-color-background--light lbzui-is-darkened"
    >
      <lbz-icon-button
        :active.sync="vactive"
        on-background="light"
        darkened
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-mini-square lbzui-color-background--primary">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="primary"
        disabled
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--secondary">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="secondary"
        disabled
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--surface">
      <lbz-icon-button
        :active.sync="vactive"
        disabled
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--error">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="error"
        disabled
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--light">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="light"
        disabled
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>
    <div class="lbzui-mini-square lbzui-color-background--dark">
      <lbz-icon-button
        :active.sync="vactive"
        on-background="dark"
        disabled
        on-icon="favorite"
        off-icon="favorite_border"
      />
    </div>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <lbz-icon-button
      :active.sync="vactive"
      on-icon="favorite"
      off-icon="favorite_border"
      ripple
    />
    <lbz-icon-button
      :active.sync="vactive"
      on-icon="favorite"
      off-icon="favorite_border"
      :ripple="false"
    />
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ComponentsIconButton extends Vue {
    private vactive = false;

    private fclick(e: MouseEvent): void {
      alert(e);
    }
  }
</script>
