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
export type PieChart3PartsProps = typeof __propDef.props;
export type PieChart3PartsEvents = typeof __propDef.events;
export type PieChart3PartsSlots = typeof __propDef.slots;
export default class PieChart3Parts extends SvelteComponentTyped<PieChart3PartsProps, PieChart3PartsEvents, PieChart3PartsSlots> {
}
export {};
