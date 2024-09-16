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
export type TvFillProps = typeof __propDef.props;
export type TvFillEvents = typeof __propDef.events;
export type TvFillSlots = typeof __propDef.slots;
export default class TvFill extends SvelteComponentTyped<TvFillProps, TvFillEvents, TvFillSlots> {
}
export {};
