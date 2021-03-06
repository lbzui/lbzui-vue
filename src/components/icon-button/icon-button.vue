<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      !cisToggle && 'material-icons',
      'lbz-icon-button',
      onBackground && `lbz-icon-button--on-${onBackground}`,
      darkened && 'lbz-is-darkened',
      cisActive && 'lbz-is-active',
      disabled && 'lbz-is-disabled'
    ]"
    @click="!disabled && fclick($event)"
  >
    <template v-if="cisToggle">
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--on">
        <template v-if="onIcon">{{ onIcon }}</template
        ><slot v-else name="on-icon" />
      </lbz-icon>
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--off">
        <template v-if="offIcon">{{ offIcon }}</template
        ><slot v-else name="off-icon" />
      </lbz-icon>
    </template>
    <template v-else><slot /></template>
    <lbz-state v-if="!disabled" v-bind="cgetStateAttrs" />
  </component>
</template>

<script lang="ts">
  import { Component, PropSync, Prop, Emit, Vue } from 'vue-property-decorator';
  import LbzIcon from '../icon/icon.vue';
  import LbzState from '../state/state.vue';

  @Component({
    components: {
      LbzIcon,
      LbzState
    }
  })
  export default class LbzIconButton extends Vue {
    // active.sync (toggle): undefined (default), true, false
    @PropSync('active', { type: Boolean, default: undefined })
    private cisActive!: boolean;

    // router-link (!toggle): true, false (default)
    @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
    // router-link-props (!toggle && router-link): {
    //   to: '' (default) || 'x' || { x: y },
    //   replace: true || false (default),
    //   append: true || false (default),
    //   exact: true || false (default),
    //   event: 'click' (default) || 'x' || ['x']
    // }
    @Prop({
      type: Object,
      default: () => ({
        to: '',
        replace: false,
        append: false,
        exact: false,
        event: 'click'
      })
    })
    private routerLinkProps!: object;
    // tag: 'button' (default), 'a', 'x'
    @Prop({ type: String, default: 'button' }) private tag!: string;

    // on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'
    @Prop({ type: String, default: '' }) private onBackground!: string;
    // darkened: true, false (default)
    @Prop({ type: Boolean, default: false }) private darkened!: boolean;
    // disabled: true, false (default)
    @Prop({ type: Boolean, default: false }) private disabled!: boolean;
    // on-icon (toggle): '' (default), 'x'
    @Prop({ type: String, default: '' }) private onIcon!: string;
    // off-icon (toggle): '' (default), 'x'
    @Prop({ type: String, default: '' }) private offIcon!: string;
    // ripple: undefined (default), true, false
    @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

    get cisToggle(): boolean {
      return this.cisActive !== undefined;
    }

    get cgetAttrs(): LbzComponentAttributes {
      const { to, replace, append, exact, event }: any = this.routerLinkProps;
      const tag: string = this.tag;
      const disabled: boolean = tag === 'button' && this.disabled;

      return !this.cisToggle && this.routerLink
        ? {
            is: 'router-link',
            to,
            replace,
            append,
            tag,
            exact,
            event,
            disabled
          }
        : {
            is: tag,
            disabled
          };
    }

    get cgetStateAttrs(): LbzStateAttributes {
      return {
        class: 'lbz-icon-button__state',
        type: ['primary', 'secondary', 'error'].includes(this.onBackground)
          ? 'primary'
          : '',
        background: this.onBackground ? `on-${this.onBackground}` : '',
        darkened: this.darkened,
        ripple: this.ripple,
        unbounded: true,
        centered: true
      };
    }

    @Emit('click')
    private fclick(e: MouseEvent): void {
      if (this.cisToggle) {
        this.cisActive = !this.cisActive;
      }
    }
  }
</script>
