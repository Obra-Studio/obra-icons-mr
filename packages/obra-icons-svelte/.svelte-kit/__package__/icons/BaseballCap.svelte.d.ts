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
export type BaseballCapProps = typeof __propDef.props;
export type BaseballCapEvents = typeof __propDef.events;
export type BaseballCapSlots = typeof __propDef.slots;
export default class BaseballCap extends SvelteComponentTyped<BaseballCapProps, BaseballCapEvents, BaseballCapSlots> {
}
export {};
