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
export type WarningHexagonProps = typeof __propDef.props;
export type WarningHexagonEvents = typeof __propDef.events;
export type WarningHexagonSlots = typeof __propDef.slots;
export default class WarningHexagon extends SvelteComponentTyped<WarningHexagonProps, WarningHexagonEvents, WarningHexagonSlots> {
}
export {};
