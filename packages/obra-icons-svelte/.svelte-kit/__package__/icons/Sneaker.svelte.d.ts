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
export type SneakerProps = typeof __propDef.props;
export type SneakerEvents = typeof __propDef.events;
export type SneakerSlots = typeof __propDef.slots;
export default class Sneaker extends SvelteComponentTyped<SneakerProps, SneakerEvents, SneakerSlots> {
}
export {};
