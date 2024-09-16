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
export type DiamondProps = typeof __propDef.props;
export type DiamondEvents = typeof __propDef.events;
export type DiamondSlots = typeof __propDef.slots;
export default class Diamond extends SvelteComponentTyped<DiamondProps, DiamondEvents, DiamondSlots> {
}
export {};
