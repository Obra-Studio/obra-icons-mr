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
export type CloudyFillProps = typeof __propDef.props;
export type CloudyFillEvents = typeof __propDef.events;
export type CloudyFillSlots = typeof __propDef.slots;
export default class CloudyFill extends SvelteComponentTyped<CloudyFillProps, CloudyFillEvents, CloudyFillSlots> {
}
export {};
