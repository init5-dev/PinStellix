export interface IRocket {
    id: number;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: {
      meters: number;
      feet: number;
    };
    diameter: {
      meters: number;
      feet: number;
    };
    mass: {
      kg: number;
      lb: number;
    };
    payload_weights: {
      id: string;
      name: string;
      kg: number;
      lb: number;
    }[];
    first_stage: {
      reusable: boolean;
      engines: number;
      fuel_amount_tons: number;
      burn_time_sec: number;
      thrust_sea_level: {
        kN: number;
        lbf: number;
      };
      thrust_vacuum: {
        kN: number;
        lbf: number;
      };
    };
    second_stage: {
      reusable: boolean;
      engines: number;
      fuel_amount_tons: number;
      burn_time_sec: number;
      thrust: {
        kN: number;
        lbf: number;
      };
      payloads: {
        option_1: string;
        option_2: string;
        composite_fairing: {
          height: {
            meters: number;
            feet: number;
          };
          diameter: {
            meters: number;
            feet: number;
          };
        };
      };
    };
    engines: {
      number: number;
      type: string;
      version: string;
      layout: string;
      isp: {
        sea_level: number;
        vacuum: number;
      };
      engine_loss_max: number;
      propellant_1: string;
      propellant_2: string;
      thrust_sea_level: {
        kN: number;
        lbf: number;
      };
      thrust_vacuum: {
        kN: number;
        lbf: number;
      };
      thrust_to_weight: number;
    };
    landing_legs: {
      number: number;
      material: string;
    };
    flickr_images: string[];
    wikipedia: string;
    description: string;
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
}

export interface IRocketCard {
  rocket: {
    rocket_id: number;
    rocket_name: string;
    description: string;
    flickr_images: string[];
  };
}

export interface ICapsule {
  capsule_serial: string;
  capsule_id: string;
  status: 'unknown' | 'active' | 'retired' | 'destroyed';
  original_launch: string | null;
  original_launch_unix: number | null;
  missions: Array<{
    name: string;
    flight: number;
  }>;
  landings: number;
  type: string;
  details: string | null;
  reuse_count: number;
}

export interface IDragon {
  heat_shield: {
    material: string;
    size_meters: number;
    temp_degrees: number;
    dev_partner: string;
  };
  launch_payload_mass: {
    kg: number;
    lb: number;
  };
  launch_payload_vol: {
    cubic_meters: number;
    cubic_feet: number;
  };
  return_payload_mass: {
    kg: number;
    lb: number;
  };
  return_payload_vol: {
    cubic_meters: number;
    cubic_feet: number;
  };
  pressurized_capsule: {
    payload_volume: {
      cubic_meters: number;
      cubic_feet: number;
    };
  };
  trunk: {
    trunk_volume: {
      cubic_meters: number;
      cubic_feet: number;
    };
    cargo: {
      solar_array: number;
      unpressurized_cargo: boolean;
    };
  };
  height_w_trunk: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  first_flight: string;
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  thrusters: {
    type: string;
    amount: number;
    pods: number;
    fuel_1: string;
    fuel_2: string;
    isp: number;
    thrust: {
      kN: number;
      lbf: number;
    };
  }[];
  wikipedia: string;
  description: string;
  id: string;
}

