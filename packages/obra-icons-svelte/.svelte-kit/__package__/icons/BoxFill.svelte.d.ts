import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BoxFillProps = typeof __propDef.props;
export type BoxFillEvents = typeof __propDef.events;
export type BoxFillSlots = typeof __propDef.slots;
export default class BoxFill extends SvelteComponentTyped<BoxFillProps, BoxFillEvents, BoxFillSlots> {
}
export {};
