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
export type CastleTurretProps = typeof __propDef.props;
export type CastleTurretEvents = typeof __propDef.events;
export type CastleTurretSlots = typeof __propDef.slots;
export default class CastleTurret extends SvelteComponentTyped<CastleTurretProps, CastleTurretEvents, CastleTurretSlots> {
}
export {};
