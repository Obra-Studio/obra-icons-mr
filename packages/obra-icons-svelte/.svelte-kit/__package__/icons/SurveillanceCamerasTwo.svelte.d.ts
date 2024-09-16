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
export type SurveillanceCamerasTwoProps = typeof __propDef.props;
export type SurveillanceCamerasTwoEvents = typeof __propDef.events;
export type SurveillanceCamerasTwoSlots = typeof __propDef.slots;
export default class SurveillanceCamerasTwo extends SvelteComponentTyped<SurveillanceCamerasTwoProps, SurveillanceCamerasTwoEvents, SurveillanceCamerasTwoSlots> {
}
export {};
