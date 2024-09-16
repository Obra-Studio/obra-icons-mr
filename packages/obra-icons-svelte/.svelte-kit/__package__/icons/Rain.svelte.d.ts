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
export type RainProps = typeof __propDef.props;
export type RainEvents = typeof __propDef.events;
export type RainSlots = typeof __propDef.slots;
export default class Rain extends SvelteComponentTyped<RainProps, RainEvents, RainSlots> {
}
export {};
