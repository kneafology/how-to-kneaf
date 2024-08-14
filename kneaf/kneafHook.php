<?php

namespace Kneaf;

class KneafHook
{
    private string $url;
    public function __construct(string $url)
    {
        $this->url = $url;
    }

    public function sayKneaf(string $message = "Kneaf"): bool
    {
        $content = [
            'content' => $message
        ];
        $curl = curl_init($this->url);

        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($content));

        curl_exec($curl);

        try {
            return (bool) curl_errno($curl);
        } finally {
            curl_close($curl);
        }
    }
}