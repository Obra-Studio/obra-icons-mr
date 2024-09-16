import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CloudyComboFillProps = typeof __propDef.props;
export type CloudyComboFillEvents = typeof __propDef.events;
export type CloudyComboFillSlots = typeof __propDef.slots;
export default class CloudyComboFill extends SvelteComponentTyped<CloudyComboFillProps, CloudyComboFillEvents, CloudyComboFillSlots> {
}
export {};
