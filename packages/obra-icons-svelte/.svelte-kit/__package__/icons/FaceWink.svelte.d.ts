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
export type FaceWinkProps = typeof __propDef.props;
export type FaceWinkEvents = typeof __propDef.events;
export type FaceWinkSlots = typeof __propDef.slots;
export default class FaceWink extends SvelteComponentTyped<FaceWinkProps, FaceWinkEvents, FaceWinkSlots> {
}
export {};
