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
export type CubeOnAxisProps = typeof __propDef.props;
export type CubeOnAxisEvents = typeof __propDef.events;
export type CubeOnAxisSlots = typeof __propDef.slots;
export default class CubeOnAxis extends SvelteComponentTyped<CubeOnAxisProps, CubeOnAxisEvents, CubeOnAxisSlots> {
}
export {};
