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
export type EyeProps = typeof __propDef.props;
export type EyeEvents = typeof __propDef.events;
export type EyeSlots = typeof __propDef.slots;
export default class Eye extends SvelteComponentTyped<EyeProps, EyeEvents, EyeSlots> {
}
export {};
