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
export type StoreFillProps = typeof __propDef.props;
export type StoreFillEvents = typeof __propDef.events;
export type StoreFillSlots = typeof __propDef.slots;
export default class StoreFill extends SvelteComponentTyped<StoreFillProps, StoreFillEvents, StoreFillSlots> {
}
export {};
