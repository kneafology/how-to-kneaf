<?php

/**
 * Say Kneaf to Achnazu Wibowo on every seconds
 */

namespace Kneaf;
require_once __DIR__ . "/kneafHook.php";

$kneaf = new KneafHook("Put in the Webhook URL");

while(true){
    $wibowoDiscordId = "700855749554864190";
    $kneaf->sayKneaf("Kneaf <@$wibowoDiscordId>");
    sleep(1);
}
