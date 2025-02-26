// JavaScript

// FIRST Robotics Challenge data definitions
// The Blue Alliance data definitions
// See https://www.thebluealliance.com/apidocs/v3

// defining some types

/**
 * A FIRST team.
 * Teams are invariant through the years, so a single dictionary will suffice.
 * @typedef {Object} Team
 * @property {string} key
 * @property {number} team_number
 * @property {string} nickname
 * @property {string} name
 * @property {string} school_name
 * @property {string} city
 * @property {string} state_prov
 * @property {string} address
 * @property {string} postal_code
 * @property {string} gmaps_place_id
 * @property {string} gmaps_url
 * @property {number} lat
 * @property {number} lng
 * @property {string} location_name
 * @property {string} website
 * @property {number} rookie_year
 * @property {string} motto
 * @property {Object} home_championship
 */

/*
 * @typedef {Object} District
 * @property {string} abbreviation
 * @property {string} display_name
 * @property {string} key
 * @property {number} year
 */

/**
 * @typedef {Object} Webcast
 * @property {string} type - youtube
 * @property {string} channel
 * @property {string} file
 */

/**
 * An event such as the Silicon Valley Regional.
 * Events are a function of the year, so the event_code will look like 2022casj.
 * @typedef {Object} FirstEvent
 * @property {string} key
 * @property {string} name
 * @property {string} event_code
 * @property {number} event_type
 * @property {District} district
 * @property {string} city
 * @property {string} state_prov
 * @property {string} country
 * @property {string} start_date
 * @property {string} end_date
 * @property {number} year
 * @property {string} short_name
 * @property {string} event_type_string
 * @property {number} week
 * @property {string} address
 * @property {string} postal_code
 * @property {string} gmaps_place_id
 * @property {string} gmaps_url
 * @property {number} lat
 * @property {number} lng
 * @property {string} location_name
 * @property {string} timezone
 * @property {number} website
 * @property {string} first_event_id
 * @property {Object} first_event_code
 * @property {Array.<Webcast>} webcasts - array of Webcast
 * @property {Array.<string>} division_keys - array of string
 * @property {string} parent_event_key
 * @property {number} playoff_type
 * @property {string} playoff_type_string
 */

/** @typedef {number} integer */

/**
 * Match Score Breakdown for an Alliance.
 * Looking to abstract the common score breakdown fields.
 * Damn. It did not work. Apparently property only works for Object.
 * It does not work for a type implemented by an Object.
 * Maybe try extends.
 * 
 * @typedef {Object} Match_Score_Breakdown_Alliance
 *
 * @property {integer} adjustPoints - manual adjustment points entered
 *
 * @property {integer} foulCount - fouls assigned to the alliance
 * @property {integer} techFoulCount - tech fouls assigned to the alliance
 * 
 * @property {integer} foulPoints - points earned from fouls committed by opposing alliance
 * 
 * @property {integer} autoPoints - total points earned in autonomous
 * @property {integer} teleopPoints - total points during teleop
 * @property {integer} endgamePoints - points for endgame (not in 2024?)
 * @property {integer} totalPoints - total points earned by alliance in match
 *
 * @property {integer} rp - ranking points earned by alliance (0 in practice and playoff rounds)
 */

/**
 * Match Score Breakdown for an Alliance in the 2020 game.
 * Details vary from year to year.
 * @typedef {Match_Score_Breakdown_Alliance} Match_Score_Breakdown_2020_Alliance
 *
 * @property {string} initLineRobot1 - initiation line exited (unknown, none, exited)
 * @property {string} endgameRobot1 - endgame/shield generator result (unknown, none, park, hang)
 * @property {string} initLineRobot2 - initiation line exited (unknown, none, exited)
 * @property {string} endgameRobot2 - endgame/shield generator result (unknown, none, park, hang)
 * @property {string} initLineRobot3 - initiation line exited (unknown, none, exited)
 * @property {string} endgameRobot3 - endgame/shield generator result (unknown, none, park, hang)

 * @property {integer} autoCellsBottom - power cells scored
 * @property {integer} autoCellsOuter - power cells scored
 * @property {integer} autoCellsInner - power cells scored
 * @property {integer} teleopCellsBottom - power cells scored
 * @property {integer} teleopCellsOuter - power cells scored
 * @property {integer} teleopCellsInner - power cells scored
 * @property {boolean} stage1Activated - stage 1 activated
 * @property {boolean} stage2Activated - stage 2 activated
 * @property {boolean} stage3Activated - stage 3 activated
 * @property {string} stage3TargetColor - (Unknown, Red, Blue, Green, Yellow)
 * @property {string} endgameRungIsLevel - generator switch level at end of match (Unknown, NotLevel, IsLevel)

 * @property {integer} autoInitLinePoints - points earned for initiation line exit
 * @property {integer} autoCellPoints - points earned for power cells during autonomous

 * @property {integer} teleopCellPoints - points for power cells during teleop
 * @property {integer} controlPanelPoints - points for manipulating the control panel 

 * @property {boolean} shieldOperationalRankingPoint - shield generator operational ranking point
 * @property {boolean} shieldEnergizedRankingPoint - shield generator energized (including via opponent G11)
 * @property {boolean} tba_shieldEnergizedRankingPointFromFoul	- Unofficial TBA-computed value that indicates whether the shieldEnergizedRankingPoint was earned normally or awarded due to a foul.
 * @property {integer} tba_numRobotsHanging - Unofficial TBA-computed value that counts the number of robots who were hanging at the end of the match.
 */

// See the 2020 FMS API documentation for a description of each value.
// https://frcevents2.docs.apiary.io/#/reference/match-results/score-details
/**
 * Match_Score_Breakdown for the 2020 game.
 * The breakdown varies from year to year.
 * @typedef {Object} Match_Score_Breakdown_2020
 * @property {Match_Score_Breakdown_2020_Alliance} red
 * @property {Match_Score_Breakdown_2020_Alliance} blue
 */

/**
 * Match Score Breakdown for an Alliance in the 2022 game.
 * Details vary from year to year.
 * May want a method that looks at the contents to determine the year.
 * @typedef {Match_Score_Breakdown_Alliance} Match_Score_Breakdown_2022_Alliance
 * @property {string} taxiRobot1	stringEnum:[ Yes, No ]
 * @property {string} endgameRobot1	stringEnum:[ Traversal, High, Mid, Low, None ]
 * @property {string} taxiRobot2	stringEnum:[ Yes, No ]
 * @property {string} endgameRobot2	stringEnum:[ Traversal, High, Mid, Low, None ]
 * @property {string} taxiRobot3	stringEnum:[ Yes, No ]
 * @property {string} endgameRobot3	stringEnum:[ Traversal, High, Mid, Low, None ]
 * 
 * @property {integer} autoCargoLowerNear - cargo exiting near scoring table
 * @property {integer} autoCargoLowerFar - cargo exiting far from scoring table
 * @property {integer} autoCargoLowerBlue - cargo exiting blue side
 * @property {integer} autoCargoLowerRed - cargo exiting red side
 * @property {integer} autoCargoUpperNear - cargo exiting near scoring table
 * @property {integer} autoCargoUpperFar - cargo exiting far from scoring table
 * @property {integer} autoCargoUpperBlue - cargo exiting blue side
 * @property {integer} autoCargoUpperRed - cargo exiting red side
 * @property {integer} autoCargoTotal
 * 
 * @property {integer} teleopCargoLowerNear
 * @property {integer} teleopCargoLowerFar
 * @property {integer} teleopCargoLowerBlue
 * @property {integer} teleopCargoLowerRed
 * @property {integer} teleopCargoUpperNear
 * @property {integer} teleopCargoUpperFar
 * @property {integer} teleopCargoUpperBlue
 * @property {integer} teleopCargoUpperRed
 * @property {integer} teleopCargoTotal
 * 
 * @property {integer} matchCargoTotal
 * @property {integer} autoTaxiPoints
 * @property {integer} autoCargoPoints
 * @property {boolean} quintetAchieved
 * @property {integer} teleopCargoPoints
 * 
 * @property {boolean} cargoBonusRankingPoint
 * @property {boolean} hangarBonusRankingPoint
 */

/**
 * Match_Score_Breakdown for 2022.
 * The breakdown varies from year to year.
 * @typedef {Object} Match_Score_Breakdown_2022
 * @property {Match_Score_Breakdown_2022_Alliance} red
 * @property {Match_Score_Breakdown_2022_Alliance} blue
 */

/**
 * @typedef {"None" | "Cone" | "Cube"} NodeType
 */

/**
 * Community Grid
 * B, M, T are [] of "None", "Cone", "Cube"
 * @typedef {Object} Community
 * @property {NodeType[]} B
 * @property {NodeType[]} M
 * @property {NodeType[]} T
 */

/**
 * Link
 * { nodes: [ nodeType ], row: Bottom/Mid/Top }
 * @typedef {Object} Link
 * @property {NodeType[]} nodes
 * @property {"Bottom" | "Mid" | "Top"} row
 */

/**
 * Match Score Breakdown for an Alliance in the 2023 game.
 * Details vary from year to year.
 * May want a method that looks at the contents to determine the year.
 * @typedef {Match_Score_Breakdown_Alliance} Match_Score_Breakdown_2023_Alliance
 * @property {boolean} activationBonusAchieved
 * @property {"NotLevel" | "Level"} autoBridgeState
 * @property {integer} autoChargeStationPoints
 * @property {"None" | "Docked"} autoChargeStationRobot1
 * @property {"None" | "Docked"} autoChargeStationRobot2
 * @property {"None" | "Docked"} autoChargeStationRobot3
 * @property {boolean} autoDocked
 * @property {Community} autoCommunity
 * @property {integer} autoGamePieceCount
 * @property {integer} autoGamePiecePoints
 * @property {integer} autoMobilityPoints
 * @property {"Yes" | "No"} mobilityRobot1
 * @property {"Yes" | "No"} mobilityRobot2
 * @property {"Yes" | "No"} mobilityRobot3
 * @property {integer} coopGamePieceCount
 * @property {boolean} coopertitionCriteriaMet
 * @property {"NotLevel" | "Level"} endGameBridgeState
 * @property {integer} endGameChargeStationPoints
 * @property {"None" | "Docked"} endGameChargeStationRobot1
 * @property {"None" | "Docked"} endGameChargeStationRobot2
 * @property {"None" | "Docked"} endGameChargeStationRobot3
 * @property {integer} endGameParkPoints
 * @property {integer} linkPoints
 * @property {Link[]} links
 * @property {boolean} sustainabilityBonusAchieved
 * @property {Community} teleopCommunity
 * @property {integer} teleopGamePieceCount
 * @property {integer} teleopGamePiecePoints
 * @property {integer} totalChargeStationPoints
 */

/**
 * Match_Score_Breakdown for 2023.
 * The breakdown varies from year to year.
 * @typedef {Object} Match_Score_Breakdown_2023
 * @property {Match_Score_Breakdown_2023_Alliance} red
 * @property {Match_Score_Breakdown_2023_Alliance} blue
 */

/**
 * Endgame possibilites for 2024
 * Neither explicit options nor stringEnum does what I want.
 * @typedef {"None" | "Parked" | "StageLeft" | "StageCenter" | "StageRight"} Parked2024
 */

/**
 * Match Score Breakdown for an Alliance in the 2024 game.
 * Details vary from year to year.
 * Not given in documentation, so reverse engineering.
 * May want a method that looks at the contents to determine the year.
 * Looks like some fields are common and should be abstracted:
 *   adjustPoints, autoPoints, teleopPoints, totalPoints, foulCount, techFoulCount, foulPoints, rp
 * @typedef {Match_Score_Breakdown_Alliance} Match_Score_Breakdown_2024_Alliance
 *
 * @property {integer} autoAmpNoteCount
 * @property {integer} autoAmpNotePoints
 * @property {integer} autoLeavePoints
 * @property {"No" | "Yes"} autoLineRobot1
 * @property {"No" | "Yes"} autoLineRobot2
 * @property {"No" | "Yes"} autoLineRobot3
 * @property {integer} autoSpeakerNoteCount
 * @property {integer} autoSpeakerNotePoints
 * @property {integer} autoTotalNotePoints
 * 
 * @property {boolean} coopNotePlayed
 * @property {boolean} coopertitionBonusAchieved
 * @property {boolean} coopertitionCriteriaMet
 * 
 * @property {integer} endGameHarmonyPoints
 * @property {integer} endGameNoteInTrapPoints
 * @property {integer} endGameOnStagePoints
 * @property {integer} endGameParkPoints
 * @property {Parked2024} endGameRobot1
 * @property {Parked2024} endGameRobot2
 * @property {Parked2024} endGameRobot3
 * @property {integer} endGameSpotLightBonusPoints
 * @property {integer} endGameTotalStagePoints
 * 
 * @property {boolean} ensembleBonusAchieved
 * @property {integer} ensembleBonusOnStageRobotsThreshold
 * @property {integer} ensembleBonusStagePointsThreshold
 * 
 * @property {boolean} g206Penalty G206 is colluding with an opponent to gain ranking points
 * @property {boolean} g408Penalty G408 is a robot manipulating a High Note
 * @property {boolean} g424Penalty G424 Stage violation 2 tech fouls and opposition awarded Ensemble RP
 * 
 * @property {boolean} melodyBonusAchieved
 * @property {integer} melodyBonusThreshold
 * @property {integer} melodyBonusThresholdCoop
 * @property {integer} melodyBonusThresholdNonCoop
 * 
 * @property {boolean} micCenterStage
 * @property {boolean} micStageLeft
 * @property {boolean} micStageRight
 * 
 * @property {integer} teleopAmpNoteCount
 * @property {integer} teleopAmpNotePoints
 * @property {integer} teleopSpeakerNoteAmplifiedCount
 * @property {integer} teleopSpeakerNoteAmplifiedPoints
 * @property {integer} teleopSpeakerNoteCount
 * @property {integer} teleopSpeakerNotePoints
 * @property {integer} teleopTotalNotePoints
 * 
 * @property {boolean} trapCenterStage
 * @property {boolean} trapStageLeft
 * @property {boolean} trapStageRight 
 */

/**
 * Match_Score_Breakdown for 2024.
 * The breakdown varies from year to year.
 * @typedef {Object} Match_Score_Breakdown_2024
 * @property {Match_Score_Breakdown_2024_Alliance} red
 * @property {Match_Score_Breakdown_2024_Alliance} blue
 */

/**
 * Match Score Breakdown for an Alliance in the 2025 game.
 * Details vary from year to year.
 * Not given in documentation, so reverse engineering.
 * May want a method that looks at the contents to determine the year.
 * Looks like some fields are common and should be abstracted:
 *   adjustPoints, autoPoints, teleopPoints, totalPoints, foulCount, techFoulCount, foulPoints, rp
 * @typedef {Match_Score_Breakdown_Alliance} Match_Score_Breakdown_2025_Alliance
 *
 * @property {integer} adjustPoints
 * 
 * @property {integer} algaePoints
 * 
 * @property {boolean} autoBonusAchieved
 * @property {integer} autoCoralCount
 * @property {integer} autoCoralPoints
 * 
 * @property {"No" | "Yes"} autoLineRobot1
 * @property {"No" | "Yes"} autoLineRobot2
 * @property {"No" | "Yes"} autoLineRobot3
 * 
 * @property {integer} autoMobilityPoints - 3 points for each robot that moved
 * @property {integer} autoPoints
 * @property autoReef - topRow(nodeA-nodeL), midRow, botRow, trough, tba_botRowCount, tba_midRowCount, tba_topRowCount
 * 
 * @property {boolean} bargeBonusAchieved - Barge Ranking Point (>= 14 points)
 * @property {boolean} coopertitionCriteriaMet - at least 2 algae in each processor
 * @property {boolean} coralBonusAchieved - Reef Ranking Point
 * 
 * @property {integer} endGameBargePoints - sum of endgame robot points
 * @property {"None" | "Parked" | "ShallowClimb" | "DeepClimb"} endGameRobot1 - 0, 2, 6, 12
 * @property {"None" | "Parked" | "ShallowClimb" | "DeepClimb"} endGameRobot2
 * @property {"None" | "Parked" | "ShallowClimb" | "DeepClimb"} endGameRobot3
 * 
 * @property {integer} foulCount
 * @property {integer} foulPoints
 * 
 * @property {boolean} g206Penalty - violating a rule to influence ranking points
 * @property {boolean} g408Penalty - damaging a scoring element
 * @property {boolean} g424Penalty - tipping or entangling an opposing robot
 * 
 * @property {integer} netAlgaeCount - number of algae in the net
 * @property {integer} rp - total number of ranking points
 * @property {integer} techFoulCount
 * @property {integer} teleopCoralCount
 * @property {integer} teleopCoralPoints
 * @property {integer} teleopPoints
 * @property teleopReef
 * @property {integer} totalPoints
 * @property {integer} wallAlgaeCount - algae in the processor
 */

/**
 * Match_Score_Breakdown for 2025.
 * The breakdown varies from year to year.
 * @typedef {Object} Match_Score_Breakdown_2025
 * @property {Match_Score_Breakdown_2025_Alliance} red
 * @property {Match_Score_Breakdown_2025_Alliance} blue
 */

/**
 * Match Score Breakdown gives detailed scoring information.
 * The detailed information varies from year to year
 * @typedef {Match_Score_Breakdown_2020 | Match_Score_Breakdown_2022 | Match_Score_Breakdown_2023 | Match_Score_Breakdown_2024 | Match_Score_Breakdown_2025 | Object} Match_Score_Breakdown
 */

// The Blue Alliance

/**
 * Description of a particular alliance.
 * @typedef {Object} AllianceX
 * @property {integer} score
 * @property {Array.<string>} team_keys
 * @property {Array.<string>} surrogate_team_keys
 * @property {Array.<string>} dq_team_keys
 */

/**
 * The two alliances.
 * This definitions allows the development environment to suggest "red" or "blue".
 * @typedef {Object} Alliances
 * @property {AllianceX} blue
 * @property {AllianceX} red
 */

/**
 * A single match at an event.
 * The match has an event_key that will look like 2022casj, but it does not explicitly state the year.
 * Examination of the FirstEvent will reveal the year.
 * The score_breakdown varies from year to year.
 * @typedef {Object} Match
 * @property {string} key - Match key
 * @property {string} comp_level - competition level (e.g., "qm" for qualifying match) qm, ef, qf, sf, f
 * @property {integer} set_number - set number of the match
 * @property {integer} match_number - match number
 * @property {Alliances} alliances
 * @property {string} winning_alliance - (e.g., "red", "blue", or "" (tie))
 * @property {string} event_key - event key of the match
 * @property {number} time - UNIX time match is scheduled
 * @property {number} actual_time - UNIX time of actual match start
 * @property {number} predicted_time - UNIX time that TBA predicts for the match
 * @property {number} post_result_time - UNIX time the match result was posted
 * @property {Match_Score_Breakdown} score_breakdown
 * @property {Array} videos - array of video objects with type: ("youtube" or "tba") and key (string)
 */

// Request: ./match/{match_key}/zebra_motionworks
//   alliances
//      red: [ {team_key: "", xs: [numbers, null], ys: [numbers, null]} ]
/**
 * Zebra position information for a single team.
 * @typedef {Object} ZebraTeam
 * @property {string} team_key
 * @property {number[]} xs - x coordinate (feet) at time i
 * @property {number[]} ys - y coordinate (feet) at time i
 */
/**
 * Zebra position information for both alliances.
 * This defintion will offer "red" and "blue" completions.
 * @typedef {Object} ZebraAlliances
 * @property {ZebraTeam[]} red - red alliance position data
 * @property {ZebraTeam[]} blue - blue alliance position data
 */
/**
 * Robot position versus time information.
 * This is the result of a ./match/{match_key}/zebra_motionworks query.
 * @typedef {Object} Zebra
 * @property {string} key - match key
 * @property {number[]} times - list of relative timestamps
 * @property {ZebraAlliances} alliances - data for an alliance
 */

/**
 * Offensive Power Ranking and other metrics for an event.
 * The result of an ./event/{event_key}/oprs query.
 * @typedef {Object} Event_OPRs
 * @property {Object.<string,number>} oprs - team_key to OPRS
 * @property {Object.<string,number>} dprs - team_key to DPRS
 * @property {Object.<string,number>} ccwms - team_key to CCWMS
 */
