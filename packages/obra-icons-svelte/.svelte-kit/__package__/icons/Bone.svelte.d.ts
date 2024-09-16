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
export type BoneProps = typeof __propDef.props;
export type BoneEvents = typeof __propDef.events;
export type BoneSlots = typeof __propDef.slots;
export default class Bone extends SvelteComponentTyped<BoneProps, BoneEvents, BoneSlots> {
}
export {};
