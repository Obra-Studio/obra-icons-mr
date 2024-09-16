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
export type TrendingUpProps = typeof __propDef.props;
export type TrendingUpEvents = typeof __propDef.events;
export type TrendingUpSlots = typeof __propDef.slots;
export default class TrendingUp extends SvelteComponentTyped<TrendingUpProps, TrendingUpEvents, TrendingUpSlots> {
}
export {};
