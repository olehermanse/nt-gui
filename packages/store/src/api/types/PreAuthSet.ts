/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityData } from "./IdentityData";
export type PreAuthSet = {
  /**
   * Indicates that despite the device having any authsets the preauthorization should proceed.
   */
  force?: boolean;
  identity_data: IdentityData;
  /**
   * The device's public key (PEM encoding), generated by the device or pre-provisioned by the vendor. Currently supported public algorithms are: RSA, Ed25519 and ECDSA P-256.
   */
  pubkey: string;
};