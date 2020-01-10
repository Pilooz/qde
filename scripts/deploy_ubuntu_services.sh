#!/bin/bash
cd /etc/systemd/system

#sudo systemctl disable qde_datacnrd.service
sudo systemctl disable qde_deployd.service
sudo systemctl disable qde_ngrokd.service
sudo systemctl disable qde_node_server.service
sudo systemctl disable qde_presenced.service

#sudo ln -s /home/cnr/Documents/quai-des-energies/services/ubuntu/qde_datacnrd.service qde_datacnrd.service
#sudo systemctl enable qde_datacnrd.service
sudo ln -s /home/cnr/Documents/quai-des-energies/services/ubuntu/qde_deployd.service qde_deployd.service
sudo systemctl enable qde_deployd.service
sudo ln -s /home/cnr/Documents/quai-des-energies/services/ubuntu/qde_ngrokd.service qde_ngrokd.service
sudo systemctl enable qde_ngrokd.service
sudo ln -s /home/cnr/Documents/quai-des-energies/services/ubuntu/qde_node_server.service qde_node_server.service
sudo systemctl enable qde_node_server.service
sudo ln -s /home/cnr/Documents/quai-des-energies/services/ubuntu/qde_presenced.service qde_presenced.service
sudo systemctl enable qde_presenced.service

sudo systemctl daemon-reload
