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
export type FaceHappyAddProps = typeof __propDef.props;
export type FaceHappyAddEvents = typeof __propDef.events;
export type FaceHappyAddSlots = typeof __propDef.slots;
export default class FaceHappyAdd extends SvelteComponentTyped<FaceHappyAddProps, FaceHappyAddEvents, FaceHappyAddSlots> {
}
export {};
