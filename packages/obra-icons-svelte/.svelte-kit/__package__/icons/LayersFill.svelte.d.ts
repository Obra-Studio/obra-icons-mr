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
export type LayersFillProps = typeof __propDef.props;
export type LayersFillEvents = typeof __propDef.events;
export type LayersFillSlots = typeof __propDef.slots;
export default class LayersFill extends SvelteComponentTyped<LayersFillProps, LayersFillEvents, LayersFillSlots> {
}
export {};
