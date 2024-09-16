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
export type SubwayFillProps = typeof __propDef.props;
export type SubwayFillEvents = typeof __propDef.events;
export type SubwayFillSlots = typeof __propDef.slots;
export default class SubwayFill extends SvelteComponentTyped<SubwayFillProps, SubwayFillEvents, SubwayFillSlots> {
}
export {};
