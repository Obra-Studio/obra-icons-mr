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
export type BasketballProps = typeof __propDef.props;
export type BasketballEvents = typeof __propDef.events;
export type BasketballSlots = typeof __propDef.slots;
export default class Basketball extends SvelteComponentTyped<BasketballProps, BasketballEvents, BasketballSlots> {
}
export {};
