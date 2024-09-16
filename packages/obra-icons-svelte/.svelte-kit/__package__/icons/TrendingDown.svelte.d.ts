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
export type TrendingDownProps = typeof __propDef.props;
export type TrendingDownEvents = typeof __propDef.events;
export type TrendingDownSlots = typeof __propDef.slots;
export default class TrendingDown extends SvelteComponentTyped<TrendingDownProps, TrendingDownEvents, TrendingDownSlots> {
}
export {};
