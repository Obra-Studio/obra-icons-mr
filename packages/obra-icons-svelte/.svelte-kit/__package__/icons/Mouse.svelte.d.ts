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
export type MouseProps = typeof __propDef.props;
export type MouseEvents = typeof __propDef.events;
export type MouseSlots = typeof __propDef.slots;
export default class Mouse extends SvelteComponentTyped<MouseProps, MouseEvents, MouseSlots> {
}
export {};
