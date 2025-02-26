// Javascript

// Get the FRC type definitions
// this should get all the definitions
import "./frcdefs.js";

/**
 * The Blue Alliance API
 * @class
 * */
export class TheBlueAlliance {
    /**
     * access key for the Blue Alliance API.
     * This key is a SECRET.
     * @member {string?}
     */
    key = null;

    /**
     * The URL for the TBA REST database.
     * @member {string}
     */
    urlBase = "https://www.thebluealliance.com/api/v3/";

    /**
     * The Blue Alliance class constructor
     * @param {string} key for API access
     */
    constructor(key) {
        this.key = key;
    }

    /**
     * Combine an array of strings.
     * @param {string[]} a
     */
    restCombine(...a) {
        return a.join("/");
    }

    /**
     * Make a REST database query to the TBA
     * @param {String[]} str the REST query (e.g. "event/2022casf/teams")
     * @returns {Promise} that holds the result
     */
    query(... str) {
        return new Promise((resolve, reject) => {
            // make an HTTP request
            var xhr = new XMLHttpRequest();

            xhr.onerror = function () {
                // the request failed
                reject("HTTP request failed");
            };

            xhr.onload = function () {
                // we got the data.
                // return it as the value
                resolve(xhr.response);
            };

            // open the REST request
            xhr.open("GET", this.urlBase + str.join("/"));

            // ask for JSON
            xhr.responseType = "json";
            xhr.setRequestHeader("Accept", "application/json");

            // set authorization
            xhr.setRequestHeader("X-TBA-Auth-Key", this.key);

            // transmit the request
            xhr.send();
        });
    }

    /**
     * Get the heat map for a match.
     * @param {string} strMatch the match key. For example, 2019cc_qm1
     * @returns {Promise<Zebra>}
     */
    getHeatMap(strMatch) {
        return this.query("match", strMatch, "zebra_motionworks");
    }

    /**
     * Check the score breakdown.
     * Some score breakdowns have inconsistent data.
     * Possibly the result of a score being corrected by FIRST.
     * @param {Match_Score_Breakdown_2022_Alliance} sb
     * @return {string?} null if consistent
     */
    checkScoreBreakdown(sb) {
        // total cargo scored in lower hub during auto (2 points each)
        var ccargoAutoLower =
            sb.autoCargoLowerNear +
            sb.autoCargoLowerFar +
            sb.autoCargoLowerRed +
            sb.autoCargoLowerBlue;
        // total cargo scored in upper hub during auto (4 points each)
        var ccargoAutoUpper =
            sb.autoCargoUpperNear +
            sb.autoCargoUpperFar +
            sb.autoCargoUpperRed +
            sb.autoCargoUpperBlue;
        // total cargo scored in lower hub during teleop (1 point each)
        var ccargoTeleopLower =
            sb.teleopCargoLowerNear +
            sb.teleopCargoLowerFar +
            sb.teleopCargoLowerRed +
            sb.teleopCargoLowerBlue;
        // total cargo scored in upper hub during teleop (2 points each)
        var ccargoTeleopUpper =
            sb.teleopCargoUpperNear +
            sb.teleopCargoUpperFar +
            sb.teleopCargoUpperRed +
            sb.teleopCargoUpperBlue;

        // this test works...
        if (ccargoAutoLower + ccargoAutoUpper != sb.autoCargoTotal ||
            ccargoTeleopLower + ccargoTeleopUpper != sb.teleopCargoTotal) {
            return "Upper + Lower cargo != total cargo";
        }

        if (sb.autoCargoTotal + sb.teleopCargoTotal != sb.matchCargoTotal) {
            return "auto cargo + teleop cargo != match cargo";
        }

        // These trigger for 2022mndu_qm17
        if (ccargoAutoLower * 2 + ccargoAutoUpper * 4 != sb.autoCargoPoints) {
            // console.log(" %d * 2 + %d * 4 != %d", ccargoAutoLower, ccargoAutoUpper, sb.autoCargoPoints);
            return "Auto cargo and auto cargo points do not match";
        }
        if (ccargoTeleopLower * 1 + ccargoTeleopUpper * 2 != sb.teleopCargoPoints) {
            // console.log(" %d * 1 + %d * 2 != %d", ccargoTeleopLower, ccargoTeleopUpper, sb.teleopCargoPoints);
            return "Teleop cargo and teleop cargo points do not match";
        }

        // looks OK
        return null;
    }

    /**
     * Check the Alliance Score Breakdown for the 2024 game
     *
     * @param {Match_Score_Breakdown_2024_Alliance} sb
     * @returns {string?}
     */
    checkSB2024(sb) {

        // the Melody ranking point has some thresholds that we expect to be constant
        // this is about the number of notes scored
        if (sb.melodyBonusThresholdCoop != 15) return "MelodyThresholdCoop";
        if (sb.melodyBonusThresholdNonCoop != 18) return "MelodyThresholdNonCoop";

        // check the Melody threshold actually used
        if (sb.melodyBonusThreshold != (sb.coopertitionCriteriaMet) ? sb.melodyBonusThresholdCoop : sb.melodyBonusThresholdNonCoop) {
            return "MelodyThreshold";
        }

        // check the Melody result
        var notes = sb.autoSpeakerNoteCount + sb.teleopSpeakerNoteCount + sb.teleopSpeakerNoteAmplifiedCount + sb.teleopAmpNoteCount;
        if (sb.melodyBonusAchieved != (notes >= sb.melodyBonusThreshold)) return "MelodyBonusAchiement";

        // the Ensemble ranking point has some thresholds that we expect to be constant
        // 2 robots must climb
        if (sb.ensembleBonusOnStageRobotsThreshold != 2) return "OnStageRobotThreshold";
        // 10 points must be scored
        if (sb.ensembleBonusStagePointsThreshold != 10) return "OnStagePointThreshold";

        // check the Ensemble result
        var ensembleRobots = 0;
        if (sb.endGameRobot1 != "None" && sb.endGameRobot1 != "Parked") ensembleRobots++;
        if (sb.endGameRobot2 != "None" && sb.endGameRobot2 != "Parked") ensembleRobots++;
        if (sb.endGameRobot3 != "None" && sb.endGameRobot3 != "Parked") ensembleRobots++;
        if (sb.ensembleBonusAchieved != (ensembleRobots > sb.ensembleBonusOnStageRobotsThreshold && sb.endGameOnStagePoints >= sb.ensembleBonusStagePointsThreshold))
            return "EnsembleAchieved";

        // looks OK
        return null;
    }

}