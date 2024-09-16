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
export type FaceHappyProps = typeof __propDef.props;
export type FaceHappyEvents = typeof __propDef.events;
export type FaceHappySlots = typeof __propDef.slots;
export default class FaceHappy extends SvelteComponentTyped<FaceHappyProps, FaceHappyEvents, FaceHappySlots> {
}
export {};
